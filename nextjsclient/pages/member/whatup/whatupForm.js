import RichText from "../../../components/form/RichText";
import Input from "../../../components/form/Input";
import { useEffect, useState } from "react";
import { useWhatup } from "../../../hooks/useWhatup";
import axios from "../../../libs/axios";

export const WhatupForm = ({ editId }) => {
  const { whatup, saveWhatup } = useWhatup();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [cbox, setCheckbox] = useState(0);

  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(null);
  const [theUpdateId, setTheUpdateId] = useState(0);

  //  console.log(`the edit id is ${editId} the wt ${whatup}`);
  const handle = (e) => {
    if (e.target.checked) {
      setCheckbox(1);
    } else {
      setCheckbox(0);
    }
  };

  const edit = async ({ editId }) => {
    if (editId === 0 || editId === undefined) return;
    //console.log(`edit id ${editId}`);

    try {
      let res = await axios.get(`/api/member/whatup/${editId}`);
      let wp = await res.data.whatup;
      setTheUpdateId(wp.id);
      setTitle(wp.title);
      setBody(wp.body);
      if (wp.is_public !== 0) {
        setCheckbox(1);
      }
    } catch (error) {
      console.log(error);
    }

    //console.log(`the update id is ${theUpdateId}`);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    //    console.log(`the cbox is ${cbox}`);
    //console.log(`the update id ${theUpdateId}`);
    saveWhatup({ setError, setSuccess, title, body, cbox, theUpdateId });
  };

  useEffect(() => {
    edit({ editId });
  }, []);

  return (
    <div>
      <h1 className="text-3xl">this is what up form</h1>
      <div className="py-14 bg-gray-100 p-2">
        <form onSubmit={submitForm}>
          <Input type="hidden" value={theUpdateId}></Input>
          <div className="">
            <label htmlFor="title" className="px-4">
              Title
            </label>
            <Input
              type="text"
              name="title"
              value={title}
              onChange={(t) => setTitle(t.target.value)}
              className="p-2 m-2 text-2xl text-blue-400 w-full"
            ></Input>
          </div>
          <div className="py-8">
            <RichText
              value={body}
              name="body"
              onBlur={(b) => setBody(b)}
              config={{ disablePlugins: "powered-by-jodit", height: 450 }}
            ></RichText>
          </div>
          <div className="flex justify-between ">
            <div>
              {error && <div dangerouslySetInnerHTML={{ __html: error }}></div>}

              {success && (
                <div dangerouslySetInnerHTML={{ __html: success }}></div>
              )}
            </div>
            <div>
              <label htmlFor="" className="text-2xl text-blue-500">
                <Input
                  type="checkbox"
                  name="is_public"
                  className="mr-2 py-8 w-6 h-6"
                  onChange={handle}
                  checked={cbox}
                ></Input>
                public
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="rounded bg-blue-300 border border-red-400 p-2 hover:bg-green-400 hover:text-white"
              >
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WhatupForm;
