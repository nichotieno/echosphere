import { ChatLayout } from '@/components/chat-layout';
import { users, messages } from '@/lib/data';

export default function ChatPage() {
    const loggedInUserId = '1'; // Mock logged-in user

    return (
        <div className="h-[calc(100vh-8rem)]">
            <ChatLayout 
                users={users} 
                messages={messages} 
                defaultUserId={loggedInUserId} 
            />
        </div>
    );
}
