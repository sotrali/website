import Link from "next/link.js";
import Layout from "../../components/tests-layout.js";
import utilStyles from "../../styles/utils.module.css";

/**
 * THIS FILE PRACTICES:
 * basic conditional rendering strategies
 * */
function Item({ name, isPacked }) {
  /** first example, ternary operator (concise way to choose between two branches)*/ /**
    return (
    <li className="item">  
        { isPacked ? name + " ✔" : name }
    </li>
    ); */

  /** second example, using && bolean logic (for something or nothing type situations) */
  return (
    <>
      <li className='item'>
        {name} {isPacked && "✔"}
      </li>
    </>
  );

  /** finally, using an if statement and reassigning variables (allows most flexibility) */
  let itemContent = name;
  if (isPacked) name = name + " ✔";

  return (
    <>
      <li className='item'>{name}</li>
    </>
  );
}
function PackingList() {
  return (
    <>
      <h1>George's List</h1>
      <section className={utilStyles.card}>
        <ul>
          <Item isPacked={true} name='Space suit' />
          <Item isPacked={true} name='Rocket' />
          <Item isPacked={false} name='Photo of Family' />
          <Item isPacked={false} name='Clipboard and Pen' />
          <Item isPacked={true} name='Extra Banana' />
          <Item isPacked={false} name='Scientific Instrumentation' />
        </ul>
      </section>
    </>
  );
}

export default function Main() {
  return (
    <Layout id={2}>
      <PackingList />
    </Layout>
  );
}
