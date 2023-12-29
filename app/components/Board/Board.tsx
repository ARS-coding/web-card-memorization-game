"use client"

import React from "react";

export function Board({ children }: { children: React.ReactNode }) {
    return (
        <div id="board">{children}</div>
    )
}