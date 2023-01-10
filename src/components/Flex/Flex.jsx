import "./Flex.css";

function Flex({children}) {
    return (
        <div className="flex-container">{children}</div>
    );
}

export default Flex;