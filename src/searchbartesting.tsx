import React from 'react';
import { render, act } from '@testing-library/react';
import axios from 'axios';
import SearchBar from './SearchBar';

jest.mock('axios');

describe('SearchBar', () => {
    it('processes and displays raid and activity data correctly', async () => {
        // Mock the API responses
        const statsResponse = {
            data: {
                Response: {
                    activities: [
                        {
                            activityDetails: { referenceId: 3717402156 },
                            values: { kills: { basic: { displayValue: '10' } } },
                        },
                    ],
                },
            },
        };

        const raidResponse = {
            data: {
                Response: {
                    activities: [
                        {
                            activityDetails: { referenceId: 3717402156 },
                            values: {
                                kills: { basic: { displayValue: '10' } },
                                deaths: { basic: { displayValue: '5' } },
                                assists: { basic: { displayValue: '3' } },
                                killsDeathsRatio: { basic: { displayValue: '2' } },
                                timePlayedSeconds: { basic: { displayValue: '3600' } },
                                completed: { basic: { displayValue: 'Yes' } },
                            },
                            period: '2022-01-01T00:00:00Z',
                        },
                    ],
                },
            },
        };

        (axios.get as jest.Mock)
            .mockResolvedValueOnce(statsResponse)
            .mockResolvedValueOnce(raidResponse);

        // Render the SearchBar component
        const { getByText } = render(<SearchBar />);

        // Wait for the API calls and state updates
        await act(async () => {
            expect(axios.get).toHaveBeenCalledTimes(2);
            expect(getByText('Raid Name: Grasp of Avarice: Master'));
            expect(getByText('Kills: 10'));
            expect(getByText('Deaths: 5'));
            expect(getByText('Assists: 3'));
            expect(getByText('K/D Ratio: 2'));
            expect(getByText('Time Played: 3600'));
            expect(getByText('Period: 2022-01-01'));
            expect(getByText('Completed: Yes'));
        });
    });
});