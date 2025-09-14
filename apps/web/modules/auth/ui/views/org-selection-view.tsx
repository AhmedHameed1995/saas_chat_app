import { OrganizationList } from "@clerk/nextjs";


export const OrgSelectionView = () => {
    return (
        <OrganizationList 
            afterCreateOrganizationUrl={"/"}
            afterSelectPersonalUrl={"/"}
            hidePersonal={true}
            skipInvitationScreen={true}
        />
    )
}

