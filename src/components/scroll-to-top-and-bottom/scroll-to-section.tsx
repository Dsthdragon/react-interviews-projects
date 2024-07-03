import { useRef } from "react";

export default function ScrollToSection() {

  const ref = useRef<HTMLDivElement>(null)
  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "50px"
      }
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "50px"
      }
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "50px"
      }
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "50px"
      }
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "pink",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "50px"
      }
    }
  ];
  function handleScrollToSection() {
    const pos = ref.current?.getBoundingClientRect().top
    window.scrollTo({
      top: pos,
      behavior: "smooth"
    })
  }
  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={handleScrollToSection}> Click to Scroll</button>
      {data.map(({ label, style }, index) => (
        <div ref={index === 3 ? ref : null } key={index} style={style}>
          <h3>{label}</h3>
        </div>
      ))}
    </div>
  );
}
