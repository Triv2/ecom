import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator, DropdownMenuShortcut,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {currentUser, SignOutButton} from "@clerk/nextjs";
import ClerkProfileSettings from "@/components/navigation/clerk-profile-settings";


export async function UserNav() {

    const user = await currentUser();
    const primaryEmail = user?.emailAddresses?.find(email => email.id === user?.primaryEmailAddressId)?.emailAddress;
    const userInitials = (user?.firstName?.[0] || '') + (user?.lastName?.[0] || '');
    const userInitialsUpper = userInitials.toUpperCase();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 pointer-events-auto rounded-full">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={user?.imageUrl} alt={user?.username ? '@' + user?.username : '@'} />
                        <AvatarFallback>{userInitials}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user?.firstName} {user?.lastName || ''}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {primaryEmail}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {/*<DropdownMenuItem>*/}
                    {/*    Profile*/}
                    {/*    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>*/}
                    {/*</DropdownMenuItem>*/}
                    {/*<DropdownMenuItem>*/}
                    {/*    Billing*/}
                    {/*    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>*/}
                    {/*</DropdownMenuItem>*/}

                    <ClerkProfileSettings/>

                    {/*<DropdownMenuItem>New Team</DropdownMenuItem>*/}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <SignOutButton>
                <DropdownMenuItem>
                    Log out
                    {/*<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>*/}
                </DropdownMenuItem>
                </SignOutButton>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}