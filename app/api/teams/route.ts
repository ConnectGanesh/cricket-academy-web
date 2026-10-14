import { NextResponse } from 'next/server';

const teams = [
  { id: 1, name: 'Elite U-19', coach: 'Rajesh Kumar', players: 18, wins: 22 },
  { id: 2, name: 'Elite U-16', coach: 'Priya Singh', players: 15, wins: 18 },
  { id: 3, name: 'Elite U-14', coach: 'Arjun Verma', players: 14, wins: 12 },
  { id: 4, name: 'Senior Stars', coach: 'Vikram Patel', players: 17, wins: 20 },
  { id: 5, name: 'Emerging Talents', coach: 'Sneha Sharma', players: 16, wins: 10 },
];

export async function GET() {
  return NextResponse.json(teams);
}
