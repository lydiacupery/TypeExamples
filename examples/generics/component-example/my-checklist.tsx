import { Checklist, TaskProps } from './checklist';

const TaskUI = ({ isComplete, name }: TaskProps<'Step 1' | 'Step 2' | 'Step 3'>) =>
  isComplete ? (
    <div>{`Task ${name} - DONE!`}</div>
  ) : (
    <div>{`Task ${name}`}</div>
  );

export const MyChecklist = () => {
  return (
    <Checklist
      tasks={[
        {
          name: 'Step 1',
        },
        {
          name: 'Step 2',
        },
        {
          name: 'Step 3',
        }
      ]}
      // Simulate that only Step 1 is complete
      // In reality, this function would use some state to determine if a task is complete (e.g. get if the user has completed a task from the backend)
      isTaskComplete={(name) => name === 'Step 1'}
      taskUI={TaskUI}
    />
  );
};
