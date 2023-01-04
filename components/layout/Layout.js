export default function Layout(props) {
    return (
        <div className="layout">
            <main>{props.children}</main>
        </div>
    );
};