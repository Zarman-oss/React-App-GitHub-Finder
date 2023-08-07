import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';

function UserSearch() {
  const { text, setText } = useState('');
  const handleChange = (e) => setText(e.target.value);

  const { users, searchUsers } = useContext(GithubContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      alert('Please eneter something');
    } else {
      setText('');
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2  mb-10 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input  input-md text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submt"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-md"
              >
                Confirm
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-success btn-md">Clear</button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
