import {
  CursorClickIcon,
  DesktopComputerIcon,
  SearchIcon,
  ServerIcon,
  VideoCameraIcon,
  XCircleIcon
} from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Workspace from "../../entities/WorkspaceEntity";
import Menu from "../../glob-components/Menu";

function WorkspaceOverview() {
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const [workspace, setWorkspace] = useState<Workspace>();

  const refresh = async () => {
    fetch("http://localhost:3001/workspace", { method: "GET", mode: "cors" })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setWorkspaces(data);
      });
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col bg-gray-200 p-6 pb-28">
          <div className="flex flex-col space-y-4">
            <span className="text-2xl font-bold">Search for a workspace</span>
            <div className="flex flex-row bg-gray-300 rounded overflow-hidden items-center">
              <SearchIcon className="h-8 m-1 text-gray-500" />
              <input
                className="flex-1 py-2 bg-transparent placeholder:text-gray-500 placeholder:italic"
                placeholder="Search for a workplace..."
              />
              <XCircleIcon className="h-4 m-3 text-gray-500" />
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2 p-4 -mt-16">
          {workspaces.map((w) => (
            <Link to={`/workspaces/${w.id}`}>
              <div className="flex flex-row p-4 bg-white rounded border border-gray-300 items-center">
                <div className="flex-1 flex flex-col">
                  <span className="font-bold">{w.title}</span>
                  <span className="font-light italic">
                    {w.building?.address}
                  </span>
                </div>
                <ul className="flex flex-row space-x-1">
                  <li>
                    <DesktopComputerIcon className="h-6" />
                  </li>
                  <li>
                    <VideoCameraIcon className="h-6" />
                  </li>
                  <li>
                    <ServerIcon className="h-6" />
                  </li>
                  <li>
                    <CursorClickIcon className="h-6" />
                  </li>
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Menu />
    </>
  );
}

export default WorkspaceOverview;
