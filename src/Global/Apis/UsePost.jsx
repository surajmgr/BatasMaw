import axios from "axios";
import { useState } from "react";
import { baseUrl } from "./BaseUrl";
import { toast } from "react-toastify"; // Import the toast library

const usePost = (url) => {
  const [postData, setPostData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const post = async (values, name) => {
    setIsLoading(true);
    setError(null); // Reset error state before making a new request

    try {
      const response = await axios.post(`${baseUrl}${url}`, values);
      const responseData = response?.data;
      console.log(response)
      setPostData(responseData);
      if (response?.status === 201|| response?.status === 200) {
        if (Object.keys(responseData).length > 0) {
          toast.success(`${name} added successfully!`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error(`No data found for ${name}.`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
    } catch (err) {
      setError(err);

      toast.error(`Failed to add ${name}. Please try again later.`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { post, isLoading, error, postData };
};

export default usePost;
