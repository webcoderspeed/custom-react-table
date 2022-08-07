import React from 'react';
import {
  PaginateLeftButton,
  PaginateRightButton,
  PaginationButton,
  PaginationContainer,
  PaginationText,
} from './Pagination.Elements';

interface IPagination {
  current: number;
  defaultCurrent?: number;
  defaultPageSize?: number;
  pageSize: number;
  total: number;
  disabled?: boolean;
  showSizeChanger?: boolean;
  showQuickJumper?: boolean;
  showTotal?: (total: number, range: [number, number]) => React.ReactNode;
  pageSizeOptions?: string[];
  onChange?: (page: number, pageSize?: number) => void;
  onShowSizeChange?: (current: number, size: number) => void;
  responsive?: boolean;
  simple?: boolean;
  style?: React.CSSProperties;
  className?: string;
  size?: 'default' | 'small' | 'large';
}

const Pagination = (pagination: IPagination) =><>Pagination</>;

export default Pagination;
