interface Props {
    text: string;
    handleYes?: () => void;
    handleNo?: () => void;
}

export const Dialog = ({ text, handleYes, handleNo }:Props) => {
    return (
        <dialog open={true} className="border rounded-3 p-4">
            <h4>{text}</h4>
            <div className="col-12 d-flex mt-4 justify-content-between">
                <button onClick={handleYes} className="btn btn-danger">Yes</button>
                <button onClick={handleNo} className="btn btn-primary">No</button>
            </div>
        </dialog>
    )
}