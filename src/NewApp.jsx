import CoreConcepts from "./CoreConcepts";
import Header from "./Header";

function NewApp() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <div id="box">
          <CoreConcepts title="Powerful" desc="React is extremely popular" />
          <CoreConcepts title="Powerful" desc="React is extremely popular" />
          <CoreConcepts title="Powerful" desc="React is extremely popular" />
          <CoreConcepts title="Powerful" desc="React is extremely popular" />
        </div>
      </main>
    </div>
  );
}

export default NewApp;
