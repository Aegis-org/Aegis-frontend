import React from "react";

import { BsPencil } from "react-icons/bs";
import { FiThumbsUp } from "react-icons/fi";

const EditProfile = () => {
  return (
    <div>
      <div>
        <span>
          <BsPencil />
        </span>
        <p>Edit/Update Profile</p>
      </div>
      <form>
        <div>
          <label htmlFor="bvn">BVN</label>
          <input type="text" placeholder="bvn" name="bvn" value={null} />
        </div>
        <div>
          <label htmlFor="nin">NIN</label>
          <input type="text" placeholder="nin" name="nin" value={null} />
        </div>
        <div>
          <label htmlFor="nok">Next of Kin</label>
          <input
            type="text"
            placeholder="next of kin's name"
            name="bvn"
            value={null}
          />
        </div>
        <button type="submit">
          All set
          <span>
            <FiThumbsUp />
          </span>
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
