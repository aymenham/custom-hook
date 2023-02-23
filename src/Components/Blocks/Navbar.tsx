import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        {/* custom hook */}
        <li>
          <Link to="/">Custom counter</Link>
        </li>

        <li>
          <Link to="/storage">Custom storage</Link>
        </li>
        <li>
          <Link to="/list">Custom List</Link>
        </li>
        <li>
          <Link to="/exercice-custom">Exercice</Link>
        </li>
      </ul>
      {/* useMemo && useCallback */}
      <ul>
        <li>
          <Link to="/memo">useMemo</Link>
        </li>
        <li>
          <Link to="/callback">useCallback</Link>
        </li>
        <li>
          <Link to="/cme">Exercice</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
