import { useQuery } from "react-query";
import "./styles.css";

export default function Comments() {
  const { isLoading, error, data } = useQuery("commentData", () =>
    fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
      res.json()
    )
  );

  if (isLoading) return "Loading...";

  if (error)
    return (
      <div className="text-error">An error has occurred: {error.message}</div>
    );

  return (
    <div>
      <h1>Fetching data with react-query</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 5).map((comment) => (
            <tr key={comment.id}>
              <td className="truncate">{comment.name}</td>
              <td>{comment.email}</td>
              <td className="truncate">{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
