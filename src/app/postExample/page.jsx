import {POST} from "../api/hello/route";
import {postHelloMessage} from "@/lib/hello";

const PostExample = () => {
  const {message} = postHelloMessage("sam");
  return (
    <section className="content">
      <h1>Post request</h1>
      {message && <p>{message}</p>}
    </section>
  );
};

export default PostExample;
