import SellerSidebarButton from "../Controls/SellerSidebarButton";
import {
    HouseSVG,
    ShopSVG,
    TagSVG,
    UsersSVG,
    LiveSVG,
    InboxSVG,
    CreditCardSVG,
    MegaphoneSVG,
    ChatInfoSVG,
    LogoutSVG,
} from "../../images/SVGAssets";
import {
    catalogChildren,
    teamChildren,
    streamManagementChildren,
    ordersChildren,
    promotionsChildren,
} from "../../functions/lists";

function Sidebar({}) {
    return (
        <div className="w-64 p-6 bg-gray-lidabro-sidebar flex flex-col justify-between">
            <div>
                <div className="flex pb-6 border-b border-gray-lidabro-divider">
                    <div className="w-11 h-11">
                        <img
                            className="w-full h-full rounded-full"
                            src="https://via.placeholder.com/50x50"
                            alt=""
                        />
                    </div>
                    <div className="ml-3 font-main text-sm">
                        <p className="text-blue-lidabro-username font-semibold">
                            User
                        </p>
                        <p className="text-black-lidabro text-xxs font-medium">
                            ADMIN
                        </p>
                    </div>
                </div>
                <div className="py-6">
                    <SellerSidebarButton
                        name={"Home"}
                        icon={<HouseSVG />}
                        callback={() => console.log("Home")}
                    />
                    <SellerSidebarButton
                        name={"Your Shop"}
                        icon={<ShopSVG />}
                        callback={() => console.log("Your Shop")}
                    />
                    <SellerSidebarButton
                        name={"Your Catalog"}
                        icon={<TagSVG />}
                        callback={() => console.log("Your Catalog")}
                        children={catalogChildren}
                    />
                    <SellerSidebarButton
                        name={"Your Team"}
                        icon={<UsersSVG />}
                        callback={() => console.log("Your Team")}
                        children={teamChildren}
                    />
                    <SellerSidebarButton
                        name={"Stream Management"}
                        icon={<LiveSVG />}
                        callback={() => console.log("Stream Management")}
                        children={streamManagementChildren}
                    />
                    <SellerSidebarButton
                        name={"Orders"}
                        icon={<InboxSVG />}
                        callback={() => console.log("Orders")}
                        children={ordersChildren}
                    />
                    <SellerSidebarButton
                        name={"Payment"}
                        icon={<CreditCardSVG />}
                        callback={() => console.log("Payment")}
                    />
                    <SellerSidebarButton
                        name={"Promotions"}
                        icon={<MegaphoneSVG />}
                        callback={() => console.log("Promotions")}
                        children={promotionsChildren}
                    />
                </div>
            </div>
            <div>
                <SellerSidebarButton
                    name={"Disputes"}
                    icon={<ChatInfoSVG />}
                    callback={() => console.log("Disputes")}
                />
                <SellerSidebarButton
                    name={"Logout Account"}
                    icon={<LogoutSVG />}
                    callback={() => console.log("Logout Account")}
                />
            </div>
        </div>
    );
}

export default Sidebar;
