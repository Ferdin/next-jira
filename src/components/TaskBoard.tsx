"use client";

import { useState } from "react";
import { Task, Project } from "@/src/types/project";

interface TaskBoardProps {
  project: Project;
  tasks: Task[];
}

export function TaskBoard({ project, tasks }: TaskBoardProps) {
  const [boardTasks, setBoardTasks] = useState(tasks);

  const statusColumns = {
    TODO: boardTasks.filter((task) => task.status === "TODO"),
    IN_PROGRESS: boardTasks.filter((task) => task.status === "IN_PROGRESS"),
    DONE: boardTasks.filter((task) => task.status === "DONE"),
  };

  const updateTaskStatus = (taskId: string, newStatus: Task["status"]) => {
    setBoardTasks((tasks) =>
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="flex space-x-4">
      {Object.entries(statusColumns).map(([status, columnTasks]) => (
        <div key={status} className="w-1/3 p-4 bg-gray-100 rounded">
          <h2>{status.replace("_", " ")}</h2>
          {columnTasks.map((task) => (
            <div
              key={task.id}
              className="bg-white p-2 mb-2 rounded shadow"
              draggable
              onDragEnd={() =>
                updateTaskStatus(task.id, status as Task["status"])
              }
            >
              {task.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
