/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * @author Aditya Negi <aditya.negi@314ecorp.com>
 * @description React hook useDkim
 */

import { useQuery } from 'react-query';
import _ from 'lodash';

import { addKey } from 'app-ui/utils/logicUtils';
import api from 'client/RequestClient';

/*
 * useDkim
 */

interface DkimProps {
	query?: string;
	limit?: number;
	next?: string;
	previous?: string;
	page?: number;
}

const useDkim = ({ query = '', limit, page, next, previous }: DkimProps) => {
	return useQuery(['query-dkim', query, page, limit], async () => {
		const { data } = await api.dkimApi.getDkimKeys(query, limit, page, next, previous);
		return {
			previousCursor: _.get(data, 'previousCursor'),
			nextCursor: _.get(data, 'nextCursor'),
			data: addKey(_.get(data, 'results', [])),
		};
	});
};

export default useDkim;
