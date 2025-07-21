import { useMemo } from 'react';

export type TaskProps<T extends string> = {
  isComplete: boolean;
  name: T;
};

export type Task<T extends string> = {
  name: T;
};

const ProgressBar = ({
  completionPercentage,
}: {
  completionPercentage: number;
}) => {
  // returns progress bar with completion percentage, just showing text for this example
  return <div>{`Progress percentage: ${completionPercentage}`}</div>;
};

// takes generic type variable T which extends string
export const Checklist = <T extends string>({
  tasks,
  isTaskComplete,
  taskUI: UI,
}: {
  // all of the props are generic based on the type T
  tasks: Array<Task<T>>; // Array of tasks of type T
  isTaskComplete: (t: T) => boolean; // Function that takes a task of type T and returns a boolean
  taskUI: React.FunctionComponent<TaskProps<T>>; // Function that takes a task of type T and returns a React component
}) => {
  const completionPercentage = useMemo(() => {
    return (
      (tasks.filter((task) => isTaskComplete(task.name)).length /
        tasks.length) *
      100
    );
  }, [tasks, isTaskComplete]);

  return (
    <div className="m-top-4">
      <ProgressBar completionPercentage={completionPercentage} />
      <div>
        {tasks.map((task) => {
          return (
            <UI
              key={task.name}
              isComplete={isTaskComplete(task.name)}
              name={task.name}
            />
          );
        })}
      </div>
    </div>
  );
};
