import React from "react";

import {cleanup, render, waitFor, queryByAttribute} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import DateTimePickers from "./date-time-picker";
import {format, subMinutes} from "date-fns";
import userEvent from "@testing-library/user-event";

afterEach(cleanup)


describe('<DateTimePickers />', () => {

    it('should render date-time-pickers', async () => {
        const nowDate = () => new Date();

        const mockDateRange = {
            start_date: subMinutes(nowDate(), 30),
            end_date: nowDate()
        };
        const {asFragment} = render(<DateTimePickers dateRange={mockDateRange} onChange={() => {
        }}/>)

        expect(asFragment()).toMatchSnapshot();
    });


    it('should contain date-time-pickers', async () => {

        const getById = queryByAttribute.bind(null, 'id');

        const nowDate = () => new Date();

        const mockDateRange = {
            start_date: subMinutes(nowDate(), 30),
            end_date: nowDate()
        };
        const dom = render(<DateTimePickers dateRange={mockDateRange} onChange={() => {
        }}/>)

        await waitFor(() => {

            const startDateTimePicker = getById(dom.container, 'start_date');
            const endDateTimePicker = getById(dom.container, 'end_date');

            expect(startDateTimePicker).toBeInTheDocument();
            expect(endDateTimePicker).toBeInTheDocument();
        });
    });


    it('should match with default values', async () => {
        const getById = queryByAttribute.bind(null, 'id');

        const nowDate = () => new Date();

        const mockDateRange = {
            start_date: subMinutes(nowDate(), 30),
            end_date: nowDate()
        };
        const dom = render(<DateTimePickers dateRange={mockDateRange} onChange={() => {
        }}/>)

        await waitFor(() => {

            const startDateTimePicker = getById(dom.container, 'start_date');
            const endDateTimePicker = getById(dom.container, 'end_date');

            expect(startDateTimePicker.value).toBe(format(mockDateRange.start_date, 'yyyy/MM/dd HH:mm'));
            expect(endDateTimePicker.value).toBe(format(mockDateRange.end_date, 'yyyy/MM/dd HH:mm'));
        });
    });


    it('should match with updated values', async () => {
        const getById = queryByAttribute.bind(null, 'id');

        const nowDate = () => new Date();

        const mockDateRange = {
            start_date: subMinutes(nowDate(), 30),
            end_date: nowDate()
        };

        const dom = render(<DateTimePickers dateRange={mockDateRange} onChange={() => {
        }}/>)

        await waitFor(() => {

            const startDateTimePicker = getById(dom.container, 'end_date');
            const endDateTimePicker = getById(dom.container, 'start_date');

            userEvent.type(startDateTimePicker, format(mockDateRange.end_date, 'yyyy/MM/dd HH:mm'))
            userEvent.type(endDateTimePicker, format(mockDateRange.start_date, 'yyyy/MM/dd HH:mm'))

            expect(startDateTimePicker).toHaveValue(format(mockDateRange.end_date, 'yyyy/MM/dd HH:mm'))
            expect(endDateTimePicker).toHaveValue(format(mockDateRange.start_date, 'yyyy/MM/dd HH:mm'))
        });

    });
});



