import { NextResponse } from 'next/server';

const matches = [
  { id: 1, team1: 'Elite U-19', team2: 'City Warriors', date: '2026-10-15', result: 'Won', runs: '156/8' },
  { id: 2, team1: 'Elite U-16', team2: 'Metro Knights', date: '2026-10-10', result: 'Won', runs: '142/7' },
  { id: 3, team1: 'Senior Stars', team2: 'National XI', date: '2026-10-08', result: 'Lost', runs: '128/10' },
  { id: 4, team1: 'Elite U-19', team2: 'Valley Team', date: '2026-10-01', result: 'Won', runs: '167/5' },
  { id: 5, team1: 'Elite U-14', team2: 'Young Guns', date: '2026-09-28', result: 'Won', runs: '134/6' },
  { id: 6, team1: 'Emerging Talents', team2: 'Future Stars', date: '2026-09-25', result: 'Lost', runs: '105/10' },
];

export async function GET() {
  return NextResponse.json(matches);
}
