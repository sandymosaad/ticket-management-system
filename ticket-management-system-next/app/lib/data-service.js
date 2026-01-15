import { supabase } from "./supabaseClient";

export async function getUsers() {
  const { data, error } = await supabase
    .from("profiles")
    .select("*");

  if (error) {
    console.error("Error fetching users:", error);
    throw new Error(error.message);
  }

  return data;
}

// export async function addUser(user) {
//   console.log(user)
// const { data, error } = await supabase
//   .from('profiles')
//   .insert([
//     user
//   ])
//  return data
// }
export async function addUserProfile(profile) {
  const { data, error } = await supabase
    .from("profiles")
    .insert([profile]);

  if (error) {
    console.error("Profile error:", error);
    throw new Error(error.message);
  }

  return data;
}
