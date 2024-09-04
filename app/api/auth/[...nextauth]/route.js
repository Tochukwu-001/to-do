import NextAuth from "next-auth";
import { authOptions } from "./authOptions";
import Todo from "@/app/components/TodoForm";

const handler = NextAuth (authOptions)

const routes = [{
   path:'/todo'
  
}
]

export {handler as GET, handler as POST}