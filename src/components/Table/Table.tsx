import React, { useCallback, useEffect, useState, memo } from 'react';
import {
  Body,
  Cell,
  Container,
  ExpandButton,
  ExpandedCell,
  Header,
  HeaderCell,
  Row,
} from './Table.Elements';

interface IColumn {
  title: string;
  key: string;
  render?: (text: string, record: any) => React.ReactNode;
  onFilter?: (value: string, record: any) => boolean;
  sorter?: (a: any, b: any) => number;
  sortOrder?: 'ascend' | 'descend';
  width?: number;
  fixed?: 'left' | 'right';
  filterDropdown?: React.ReactNode;
  filterIcon?: React.ReactNode;
  onSelect?: (selectedKeys: string[], record: any) => void;
}

interface IExpandable {
  expandedRowRender?: (record: any) => React.ReactNode;
  expandIcon: ({
    expanded,
    onExpand,
    record,
  }: {
    expanded: boolean;
    onExpand: (expanded: boolean, record: any) => void;
    record: any;
  }) => React.ReactNode;
  expandedRowKeys?: string[];
  expandRowByClick?: boolean;
}

interface IStyle {
  table?: React.CSSProperties;
  header?: React.CSSProperties;
  body?: React.CSSProperties;
  row?: React.CSSProperties;
  cell?: React.CSSProperties;
  expandedCell?: React.CSSProperties;
}

interface ITableProps {
  columns: IColumn[];
  data: any[];
  expandable?: IExpandable;
  styles?: IStyle;
}

const Table = ({ columns, data, expandable, styles }: ITableProps) => {
  const [expandedRowKeys, setExpandedRowKeys] = useState<string[]>([]);

  const onExpand = useCallback((expanded: boolean, record: any) => {
    if (expanded) {
      setExpandedRowKeys([...expandedRowKeys, record.key]);
    } else {
      setExpandedRowKeys(expandedRowKeys.filter((key) => key !== record.key));
    }
  }, []);

  // render expandable row
  const renderExpandableRow = useCallback((record: any) => {
    if (expandable && expandable.expandedRowRender) {
      return expandable.expandedRowRender(record);
    }
    return null;
  }, []);

  // render expandable row icon
  const renderExpandableIcon = useCallback(
    ({
      expanded,
      onExpand,
      record,
    }: {
      expanded: boolean;
      onExpand: (expanded: boolean, record: any) => void;
      record: any;
    }) => {
      if (expandable && expandable.expandIcon) {
        return expandable.expandIcon({ expanded, onExpand, record });
      }
      return null;
    },
    []
  );

  const renderHeader = useCallback((column: IColumn) => {
    if (column.render) {
      return column.render(column.title, {});
    }
    return column.title;
  }, []);

  const renderCell = useCallback((column: IColumn, record: any) => {
    if (column.render) {
      return column.render(record[column.key], record);
    }
    return record[column.key];
  }, []);

  useEffect(() => {
    if (expandable && expandable.expandedRowKeys) {
      setExpandedRowKeys(expandable.expandedRowKeys);
    }
  }, [expandable]);

  return (
    <Container
      style={styles?.table ?? {}}
    >
      <Header columns={columns.length}
        style={styles?.header ?? {}}
      >
        {columns.map((column) => (
          <HeaderCell key={column.key}>{column.title}</HeaderCell>
        ))}
      </Header>
      <Body
        style={styles?.body ?? {}}
      >
        {data.map((record) => (
          <Row key={record.key} columns={columns.length}
          isActive={expandedRowKeys.includes(record.key)}
            style={styles?.row ?? {}}
          >
            {columns.map(({ key, render }, index) => {
              if (expandable && index === 0) {
                return (
                  <Cell>
                    <ExpandButton
                      onClick={() =>
                        onExpand(!expandedRowKeys.includes(record.key), record)
                      }
                    >
                      {renderExpandableIcon({
                        expanded: expandedRowKeys.includes(record.key),
                        onExpand: onExpand,
                        record,
                      })}
                    </ExpandButton>
                    {render ? render(record[key], record) : record[key]}
                  </Cell>
                );
              }
              return (
                <Cell key={key}>
                  {render ? render(record[key], record) : record[key]}
                </Cell>
              );
            })}
            {
              // render expandable row
              expandable && expandedRowKeys.includes(record.key) && (
                <ExpandedCell>{renderExpandableRow(record)}</ExpandedCell>
              )
            }
          </Row>
        ))}
      </Body>
    </Container>
  );
};

export default memo(Table);
