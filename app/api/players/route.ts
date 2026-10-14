import { NextResponse } from 'next/server';

const players = [
  { id: 1, name: 'Arjun Singh', team: 'Elite U-19', position: 'Batsman', runs: 1250, wickets: 0 },
  { id: 2, name: 'Rohit Patel', team: 'Elite U-19', position: 'All-rounder', runs: 890, wickets: 18 },
  { id: 3, name: 'Virat Kumar', team: 'Elite U-19', position: 'Bowler', runs: 120, wickets: 32 },
  { id: 4, name: 'Priya Sharma', team: 'Elite U-16', position: 'Batsman', runs: 750, wickets: 0 },
  { id: 5, name: 'Aman Verma', team: 'Elite U-16', position: 'All-rounder', runs: 620, wickets: 14 },
  { id: 6, name: 'Sanjay Das', team: 'Senior Stars', position: 'Batsman', runs: 2100, wickets: 0 },
];

export async function GET() {
  return NextResponse.json(players);
}
