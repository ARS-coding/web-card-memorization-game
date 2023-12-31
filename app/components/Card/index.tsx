import "./index.css";

export function Card({ value }: { value: string }) {
    return (
        <div className="card">
            <div className="card-front">{value}</div>
            <div className="card-back"></div>
        </div>
    )
}