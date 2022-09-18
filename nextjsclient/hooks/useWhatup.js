import useSWR from "swr";
import axios from "../libs/axios";

export const useWhatup = () => {
  const { data: whatup } = useSWR("/api/whatup", () =>
    axios
      .get("/api/whatup")
      .then((res) => res.data)
      .catch((err) => {
        //if(err.response.status !== 409) throw err
        console.log(err);
      })
  );

  // just incase is need
  const csrf = () => axios.get("/sanctum/csrf-cookie");

  // create whatup
  const saveWhatup = async ({ setError, setSuccess, ...props }) => {
    await csrf();
    setError([]);
    setSuccess(null);
    console.log(props);

    let url = `/api/member/whatup`;

    const fData = new FormData();
    fData.append("title", props.title);
    fData.append("body", props.body);
    fData.append("is_public", props.cbox);

    if (props.theUpdateId !== 0) {
      console.log(`update ${props.theUpdateId}`);
      fData.append("_method", "PUT");
      url = `/api/member/whatup/${props.theUpdateId}`;
    }

    //  const fData = new FormData();
    //  fData.append("title", props.title);
    //  fData.append("body", props.body);
    //  fData.append("is_public", props.cbox);

    axios
      .post(url, fData)
      .then((res) =>
        setSuccess(
          `<span style="font-weight:bold;color:green">${res.data.msg}</span>`
        )
      )
      .catch((err) => {
        if (err.response.status !== 422) throw err;
        let eM = Object.values(err.response.data.errors).join();
        setError(`<span style="font-weight:bold;color:red;">${eM}</span>`);
      });
  };
  return {
    whatup,
    saveWhatup,
  };
};

export default useWhatup;
