import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
        <StatusLabel status={Status.Active} disabled={f alse}>Active</StatusLabel>
        <StatusLabel status={Status.NotActive} disabled={false}>Not Active</StatusLabel>
        <StatusLabel status={Status.Pending} disabled={false}>Pending</StatusLabel>
        <StatusLabel status={Status.Suspended} disabled={false}>Suspended</StatusLabel>
    </main>
  );
}
