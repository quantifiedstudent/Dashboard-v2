import { Button, Loading } from "@nextui-org/react";
import style from "./style.module.scss";

interface BaseButtonProps {
    disabled?: boolean;
    loading?: boolean;
    onPress?: () => void;
    children: JSX.Element;
}

const BaseButton = (props: BaseButtonProps) => {
    return (
        <Button
            auto
            onPress={props.onPress}
            disabled={props.disabled || props.loading}
            size="lg"
            css={{
                backgroundColor: "#fff",
                // border: "1px solid #DBDBDB",
                borderRadius: "7px",
                justifyContent: "flex-start",
                width: "100%",
            }}
            className="group hover:bg-slate-100 hover:text-white px-14"
        >
            {props.loading ? (
                <Loading type="points-opacity" color="currentColor" size="sm" />
            ) : (
                props.children
            )}
        </Button>
    );
};

export default BaseButton;
