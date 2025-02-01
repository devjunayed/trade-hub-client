/* eslint-disable @typescript-eslint/no-explicit-any */
export function ThrowError(error: any){
    console.log(" I am from throw erro")
     // Check if the error response exists and return the message
     console.log(error.message)
     if (error.response && error.response.data) {
        throw new Error(error.response.data.message || "An error occurred");
      }
      // If no specific error message, return a general error
      throw new Error("An unexpected error occurred");
}