import Link from "next/link.js";
import Layout from "../../components/tests-layout.js";
import utilStyles from "../../styles/utils.module.css";

/**
 * THIS FILE PRACTICES:
 * using props to render different things
 * with the same component code
 * */
const drinks = {
  Tea: {
    part: "leaf",
    caffeine: "15–70 mg/cup",
    age: "4,000+ years",
  },
  Coffee: {
    part: "bean",
    caffeine: "80–185 mg/cup",
    age: "1,000+ years",
  },
  Milk: {
    part: "...",
    caffeine: "none",
    age: "8,000+ years",
  },
};

function Drink({ name }) {
  const info = drinks[name];
  return (
    <section className={utilStyles.card}>
      <h3 className={utilStyles.headingXl} style={{ marginBottom: ".2em" }}>
        {name}
      </h3>
      <dl style={{ marginTop: "0em" }}>
        <dt>Part of plant:</dt>
        <dd style={{ marginLeft: "1rem" }}>
          <i>{info.part}</i>
        </dd>

        <dt>Caffeine content:</dt>
        <dd style={{ marginLeft: "1rem" }}>
          <i>{info.caffeine}</i>
        </dd>

        <dt>Age:</dt>
        <dd style={{ marginLeft: "1rem" }}>
          <i>{info.age}</i>
        </dd>
      </dl>
    </section>
  );
}

export default function DrinkInfo() {
  return (
    <>
      <Layout id={3}>
        <h1>Drink Information</h1>
        <Drink name='Tea' />
        <Drink name='Coffee' />
        <Drink name='Milk' />
      </Layout>
    </>
  );
}

// earlier version of solution I wrote with same logic but with an extra object for some reason:

/* function Drink({ name }) 
{
    // contains the info for the two available drink options (makes it easy for expansion)
    const drinks = {
    tea: 
    {
        name: 'tea',
        plantPart: 'leaf',
        caffeine: '40-100',
        age: '4000+'
    },
    coffee: 
    {
        name: 'coffee',
        plantPart: 'bean',
        caffeine: '80-180',
        age: '1000'
    }
} 

// determine what drink was passed into component
let drinkInfo = drinks[name];
return (
    <section>
    <h1>{drinkInfo.name}</h1>
    <dl>
        <dt>Part of plant:</dt>
        <dd>{drinkInfo.plantPart}</dd>
        
        <dt>Caffeine content:</dt>
        <dd>{drinkInfo.caffeine} mg/cup</dd>
        
        <dt>Age:</dt>
        <dd>{drinkInfo.age} years</dd>
    </dl>
    </section>
);
}

function DrinkInfo() {
return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
);
}
export default function Main() {
    return (
      <div>
        <DrinkInfo />
      </div>
    );
  }
*/
