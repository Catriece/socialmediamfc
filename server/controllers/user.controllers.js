import query from "../db/utils";

const getUserInfo = async (req) => {
  const { username } = req.query;
  const user = await query(
    "SELECT concat(first_name, ' ', last_name) as name, profile_picture, role, birthday FROM users WHERE username = ?",
    [username]
  );

  console.log("Username", user);
  if (user != null) {
    return user;
  } else return False;
};

export default {
  getUserInfo,
};
