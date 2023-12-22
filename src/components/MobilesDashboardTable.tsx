import React from 'react';
import { observer } from 'mobx-react-lite';
import activeTabStore from '../store/store';

import { IMobileDevicesData } from '../interfaces/interfaces';
import { Button, Space, Table, Tag } from 'antd';

export const MobilesDashboardTable: React.FC = observer(() => {
    const { Column } = Table;
    const onDeleteClick = (id: number) => {
        activeTabStore.onDeleteMobileClick(id);
    }

    return (
        <Table dataSource={activeTabStore.mobilesData} scroll={{x: "95vh", y: 700}}>
            <Column title="Brand" dataIndex="brand" key="brand" />
            <Column title="Model" dataIndex="model" key="model"  />
            <Column title="Storage" dataIndex="storage" key="storage" />
            <Column title="Color" dataIndex="color" key="color" />
            <Column title="Price" dataIndex="price" key="price" />
            <Column
                title="Tags"
                dataIndex="tags"
                key="tags"
                render={(tags: string[]) => (
                    <>
                        {tags.map((tag) => (
                            <Tag color="blue" key={tag}>
                                {tag}
                            </Tag>
                        ))}
                    </>
                )}
            />
            <Column
                title="Action"
                key="action"
                render={(_: any, record: IMobileDevicesData) => (
                    <Space size="small">
                        <Button
                            size='small'
                            onClick={() => onDeleteClick(record.id)}
                        >
                            Delete
                        </Button>
                    </Space>
                )}
            />
        </Table>
    )
});
