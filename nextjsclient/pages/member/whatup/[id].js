import axios from "../../../libs/axios";
import MemberLayout from "../../../components/layout/MemberLayout";
import { useRouter } from "next/router";

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  try {
    const res = await axios.get(`/api/whatup/${id}`);
    const data = await res.data.whatup;
    return {
      props: {
        whatup: data,
      },
    };
  } catch (error) {
    return {
      props: {
        whatup: id,
      },
    };
  }
};

export const whatup = ({ whatup }) => {
  //console.log(whatup);
  const title = whatup?.title;

  return (
    <MemberLayout title={title}>
      <section className="content">
        <div>
          <h1>{whatup?.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: whatup?.body }}></div>
        </div>
      </section>
    </MemberLayout>
  );
};

export default whatup;
