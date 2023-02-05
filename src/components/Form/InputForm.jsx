import Flex from '../Flex/Flex';

function InputForm(props) {
    return (
        <Flex>
            <div className="row g-2 align-items-center">
                <div className="col-auto">
                    <label className="form-label">{props.label}</label>
                </div>
                <div className="col-auto">
                    <input className="form-control"
                        value={props.value}
                        name={props.name}
                        type="text"
                        onChange={props.onChange}
                    />
                </div>
            </div>
        </Flex>
    );
}

export default InputForm;