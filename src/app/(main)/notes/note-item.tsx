"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Doc } from "../../../../convex/_generated/dataModel";

interface NoteItemProps {
  note: Doc<"notes">;
}

/**
 * Renders a card displaying the title and body of a note.
 *
 * @param note - The note object containing title and body fields to display
 */
export function NoteItem({ note }: NoteItemProps) {
  return (
    <>
      <Card className="cursor-pointer hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle>{note.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="line-clamp-3 text-sm text-muted-foreground whitespace-pre-line">
            {note.body}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
