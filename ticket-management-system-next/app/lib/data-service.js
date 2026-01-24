"use client"
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

export async function getLogedInUser() {
    const { data: { user } } = await supabase.auth.getUser()
      //console.log(user)
      return user;
}

export async function addTicket(ticket) {
  const {data, error} = await supabase
  .from("tickets")
  .insert([ticket])
  .select()
  .single();

  if (error){
    console.error("Add ticket error:", error);
    throw new Error(error.message);
  }
  //console.log(` data :${data}`)
  return data;
}

export async function getTicket(id) {
  const { data, error } = await supabase
    .from("tickets")
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.log("Error fetching ticket:", error);
    return null;
  }
   //console.log(data)
  return data;
}
export async function updateTicket(id , values){
    const { data, error } = await supabase
    .from("tickets")
    .update({'title':values.title, 'status':values.status , 'description': values.description , 'summary':values.summary})
    .eq('id', id)
}
export async function deleteTicket(id){
    const { error } = await supabase
    .from("tickets")
    .delete()
    .eq('id', id);
    if (error) {
    console.error("Error deleteing ticket:", error);
  }

}
export async function getTickets() {
  const { data, error } = await supabase
    .from("tickets")
    .select("*");

  if (error) {
    console.error("Error fetching tickets:", error);
    throw new Error(error.message);
  }

  return data;
}



export async function getTotalTicketsCount() {
  const tickets = await getTickets();
  return tickets.length;
}


export async function numByStatus(status) {
  const { data, error } = await supabase
    .from("tickets")
    .select("id")
    .eq("status", status);

  if (error) throw new Error;
  return data.length;
}
