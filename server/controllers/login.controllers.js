import query from "../db/utils";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const secretKey = "1222-0509-0722-0728";

const loginAuthentication = async (credentials) => {
  const { username, password } = credentials;

  if (username && password) {
    const passwordCheck = await query(
      "SELECT password FROM users WHERE username = ?",
      [username]
    );

    if (password.length === 0) {
      console.error("Invalid username or password");
    } else {
      const passwordMatch = await bcrypt.compare(
        password,
        passwordCheck[0].password
      );

      if (!passwordMatch) {
        console.error("Invalid username or password");
      } else {
        const user = await query(
          "SELECT id, username, email, CONCAT(first_name, ' ', middle_name, ' ', last_name) AS name, first_name, middle_name, last_name, biography, password, salt, family_code, profile_picture, cover_photo, role, birthday FROM users WHERE username = ?",
          [username]
        );

        const code = user[0].family_code;

        // code gathers users default circle's posts and comments
        const [defaultPosts, defaultPostComments, defaultFamilyCircle] =
          await Promise.all([
            query("SELECT * FROM posts WHERE family_code = ?", [code]),
            query("SELECT * FROM post_comments WHERE family_code = ?", [code]),
            query(
              `SELECT CONCAT (first_name, " ", middle_name, " ", last_name) AS name, id, profile_picture FROM users WHERE family_code = ?`,
              [code]
            ),
          ]);

        const payload = {
          familyPosts: defaultPosts.map((post) => post),
          familyPostComments: defaultPostComments.map((comment) => comment),
          familyCircle: defaultFamilyCircle.map((member) => member),

          // user information
          userId: user[0].id,
          username: user[0].username,
          email: user[0].email,
          name: user[0].name,
          firstName: user[0].first_name,
          middleName: user[0].middle_name,
          lastName: user[0].last_name,
          biography: user[0].biography,
          password: user[0].password,
          salt: user[0].salt,
          profilePicture: user[0].profile_picture,
          coverPhoto: user[0].cover_photo,
          circleCode: user[0].family_code,
          role: user[0].role,
          birthday: user[0].birthday,
        };

        const token = jwt.sign(payload, secretKey, {
          expiresIn: "1h",
        });
        return { payload, token };
      }
    }
  }
};

export default {
  loginAuthentication,
};
