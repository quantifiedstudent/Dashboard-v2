import { useState } from "react";

import Image from "next/image";
import { Text } from "@nextui-org/react";

import BaseButton from "@Components/misc/button/baseButton";
import GraphEditor from "@Components/modals/addGraphModal/AddGraphModal";

import goalsIcon from "@Assets/icons/goals_icon.svg";
import graphEditorIcon from "@Assets/icons/graph_editor_icon.svg";
import dataSharingIcon from "@Assets/icons/data_sharing.svg";
import notificationsIcon from "@Assets/icons/notifications.svg";

const Menu = () => {
    const [GraphModal, ShowGraphModal] = useState(false);

    return (
        <>
            <GraphEditor
                handleClose={() => ShowGraphModal(false)}
                show={GraphModal}
            />
            <div className="box-border flex flex-col w-80 h-screen items-start py-5 px-0 gap-12 justify-start border-r-2 border-slate-200 border-solid">
                <div className="py-5 px-6">
                    <h3 className="text-3xl font-bold">Hello, Thijmen!</h3>
                    <p>You have 3 new notifications</p>
                </div>
                <div className="flex justify-start flex-col w-full gap-4 px-4">
                    <div>
                        <BaseButton>
                            <Text className="flex gap-6 !text-base">
                                <Image
                                    src={goalsIcon}
                                    width={27.14}
                                    height={27.14}
                                    alt="Goals icon"
                                />
                                Goals
                            </Text>
                        </BaseButton>
                    </div>
                    <div>
                        <BaseButton onPress={() => ShowGraphModal(true)}>
                            <Text className="flex gap-6 !text-base">
                                <Image
                                    src={graphEditorIcon}
                                    width={27.14}
                                    height={27.14}
                                    alt="Graph editor icon"
                                />
                                Graph editor
                            </Text>
                        </BaseButton>
                    </div>
                    <div>
                        <BaseButton>
                            <Text className="flex gap-6 !text-base">
                                <Image
                                    src={dataSharingIcon}
                                    width={27.14}
                                    height={27.14}
                                    alt="datasharing icon"
                                />
                                Data sharing
                            </Text>
                        </BaseButton>
                    </div>
                    <div>
                        <BaseButton>
                            <Text className="flex gap-6 !text-base">
                                <Image
                                    src={notificationsIcon}
                                    width={27.14}
                                    height={27.14}
                                    alt="notifications icon"
                                />
                                Notifications
                            </Text>
                        </BaseButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;
