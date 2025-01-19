import React from 'react';
// import clsx from 'clsx';
// import StatusLabel, { Status } from './components/status-label';

// export default function Home() {
//   return (
//     <main>
//       <h1 className="text-xl">Home page</h1>
//         <StatusLabel status={Status.Active} disabled={false}>Active</StatusLabel>
//         <StatusLabel status={Status.NotActive} disabled={false}>Not Active</StatusLabel>
//         <StatusLabel status={Status.Pending} disabled={false}>Pending</StatusLabel>
//         <StatusLabel status={Status.Suspended} disabled={false}>Suspended</StatusLabel>
//     </main>
//   );
// }

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500 text-white">
      <h1 className="text-4xl font-bold">Hello, Tailwind CSS!</h1>
    </div>
  );
}
