import Link from "next/link";
import { useState } from "react";
import WhatupForm from "./whatupForm";
import moment from "moment";
import { getCookie } from "cookies-next";
export default function WhatupCard({ whatup }) {
  const [editId, setEditId] = useState(0);

  const edit = (id) => {
    //console.log(id);
    setEditId(id);
  };

  let ab = false;

  if (parseInt(getCookie("user_id")) !== whatup?.user_id) {
    ab = false;
  } else {
    ab = true;
  }
  //console.log(whatup);

  if (editId !== 0) {
    return <WhatupForm editId={editId}></WhatupForm>;
  }
  return (
    <div className="p-2">
      <h2>{whatup?.title}</h2>
      <Link href={`/member/whatup/${whatup?.id}`}>
        <a className="hover:text-red-400 font-bold"> read {whatup?.title}</a>
      </Link>
      <div className="flex justify-end space-x-4">
        <div className="py-4 flex justify-between space-x-3">
          <span>{whatup?.user.name}</span>
          <span>{moment(whatup?.created_at).format("YY-mm-DD HH:MM")}</span>
          <span>{moment(whatup?.created_at).fromNow()}</span>
        </div>
        {ab ? (
          <div className="space-x-7">
            <button
              value={whatup?.id}
              onClick={(e) => edit(e.target.value)}
              className="border p-2 border-gray-400 hover:bg-blue-300"
            >
              edit
            </button>

            <button className="border p-2 border-gray-400 hover:bg-red-300">
              delete
            </button>
          </div>
        ) : (
          <p>&nbsp;</p>
        )}
      </div>
    </div>
  );
}
