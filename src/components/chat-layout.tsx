"use client";

import { useState, useMemo, useEffect, useRef } from 'react';
import Link from "next/link";
import { User, ChatMessage } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Smile, Paperclip } from 'lucide-react';
import { format, isToday, isYesterday } from 'date-fns';

interface ChatLayoutProps {
  users: User[];
  messages: ChatMessage[];
  defaultUserId: string;
}

export function ChatLayout({ users: initialUsers, messages: initialMessages, defaultUserId }: ChatLayoutProps) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [messages, setMessages] = useState(initialMessages);
  const [messageInput, setMessageInput] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const otherUsers = useMemo(() => initialUsers.filter(u => u.id !== defaultUserId), [initialUsers, defaultUserId]);

  useEffect(() => {
    // Select the first user in the list by default
    if (otherUsers.length > 0) {
      setSelectedUser(otherUsers[0]);
    }
  }, [otherUsers]);

  const conversation = useMemo(() => {
    return selectedUser
      ? messages
          .filter(
            (msg) =>
              (msg.senderId === defaultUserId && msg.receiverId === selectedUser.id) ||
              (msg.senderId === selectedUser.id && msg.receiverId === defaultUserId)
          )
          .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
      : [];
  }, [selectedUser, messages, defaultUserId]);

  const handleSendMessage = () => {
    if (messageInput.trim() && selectedUser) {
        const newMessage: ChatMessage = {
            id: `m${Date.now()}`,
            senderId: defaultUserId,
            receiverId: selectedUser.id,
            content: messageInput.trim(),
            timestamp: new Date().toISOString(),
            read: true,
        };
        setMessages(prev => [...prev, newMessage]);
        setMessageInput("");
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [conversation]);

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    if(isToday(date)) return format(date, 'p');
    if(isYesterday(date)) return 'Yesterday';
    return format(date, 'P');
  }

  return (
    <div className="flex h-full w-full rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="w-[300px] border-r">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Chats</h2>
        </div>
        <ScrollArea className="h-[calc(100%-65px)]">
          <div className="p-2">
            {otherUsers.map(user => (
              <button
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className={cn(
                  'flex items-center gap-3 p-2 rounded-lg w-full text-left transition-colors',
                  selectedUser?.id === user.id ? 'bg-accent text-accent-foreground' : 'hover:bg-muted'
                )}
              >
                <Avatar className="h-10 w-10 relative">
                  <AvatarImage src={user.avatarUrl} alt={user.nickname} />
                  <AvatarFallback>{user.firstName[0]}{user.lastName[0]}</AvatarFallback>
                  {user.online && <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />}
                </Avatar>
                <div className="flex-1 truncate">
                  <div className="font-semibold">{user.nickname}</div>
                  <p className="text-xs text-muted-foreground truncate">
                    {user.online ? 'Online' : 'Offline'}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="flex flex-col flex-1">
        {selectedUser ? (
          <>
            <div className="flex items-center p-4 border-b">
              <Avatar className="h-10 w-10 relative mr-3">
                <AvatarImage src={selectedUser.avatarUrl} alt={selectedUser.nickname} />
                <AvatarFallback>{selectedUser.firstName[0]}{selectedUser.lastName[0]}</AvatarFallback>
                {selectedUser.online && <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />}
              </Avatar>
              <div>
                <h3 className="font-semibold text-lg">{selectedUser.nickname}</h3>
                <p className="text-xs text-muted-foreground">{selectedUser.online ? 'Online' : 'Offline'}</p>
              </div>
            </div>

            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {conversation.map(msg => (
                  <div key={msg.id} className={cn("flex", msg.senderId === defaultUserId ? "justify-end" : "justify-start")}>
                    <div className={cn(
                        "p-3 rounded-lg max-w-xs lg:max-w-md",
                        msg.senderId === defaultUserId ? "bg-primary text-primary-foreground" : "bg-muted"
                    )}>
                      <p className="text-sm">{msg.content}</p>
                      <p className={cn(
                          "text-xs mt-1",
                          msg.senderId === defaultUserId ? "text-primary-foreground/70" : "text-muted-foreground"
                      )}>{formatTimestamp(msg.timestamp)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="p-4 border-t">
              <div className="relative">
                <Input
                  placeholder="Type a message..."
                  className="pr-28"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <div className="absolute top-1/2 right-2 -translate-y-1/2 flex items-center">
                    <Button variant="ghost" size="icon"><Smile className="h-5 w-5"/></Button>
                    <Button variant="ghost" size="icon"><Paperclip className="h-5 w-5"/></Button>
                    <Button size="sm" onClick={handleSendMessage}><Send className="h-4 w-4"/></Button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
            <MessageSquare className="h-16 w-16 mb-4" />
            <p>Select a user to start a conversation</p>
          </div>
        )}
      </div>
    </div>
  );
}
