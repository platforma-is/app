import React, {useState} from "react";
import {GetServerSideProps} from "next";
import prisma from "@/lib/prisma";
import Layout from "@/components/Layout";
import {Card, rem, Tabs, Text} from "@mantine/core";
import {IForm} from "@/utils/types";
import {IconClipboardList, IconNorthStar, IconSettings2} from "@tabler/icons-react";
import {ResponsesLayout} from "@/components/Forms/responses/ResponsesLayout";
import {IntegrationLayout} from "@/components/Forms/integration/IntegrationLayout";
import {MenuForm} from "@/components/Forms/Menu/MenuForm";

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const form = await prisma.form.findUnique({
        where: {
            id: params?.id as string,
        },
    });

    const responses = await prisma.response.findMany({
        where: {
            formId: params?.id as string,
        },
    });

    return {
        props: {form, responses},
    };
};

const Post: React.FC<{
    responses: any[];
    form: IForm;
}> = ({responses, form}) => {
    if (!form) return null;

    const publicLink = `${
        typeof window !== "undefined" ? window.location.origin : ""
    }/api/form/${form.id}`;


    const [activeTab, setActiveTab] = useState<string | null>('integration');
    const iconStyle = {width: rem(0.75), height: rem(0.75)};

    const tabs = [
        {
            name: "integration",
            text: "Установка на сайт",
            ico: IconNorthStar
        },
        {
            name: "responses",
            text: "Ответы",
            ico: IconClipboardList
        },
        {
            name: "settings",
            text: "Интеграции и настройки",
            ico: IconSettings2
        },
    ]

    return (
        <Layout>
            <Card radius="md" p="xl" mb="md">
                <MenuForm publicLink={publicLink} form={form}/>
                <Tabs value={activeTab} onChange={setActiveTab}>
                    <Tabs.List>
                        {tabs.map((it, idx) =>
                            <Tabs.Tab
                                value={it.name}
                                color={'#5033FF'}
                                leftSection={
                                    <it.ico
                                        width={'0.75rem'}
                                        height={'0.75rem'}
                                        color={activeTab === it.name ? '#5033FF' : 'black'}/>
                                }>
                                <Text size={'0.75rem'} fw={'400'} color={activeTab === it.name ? '#5033FF' : 'black'}>
                                    {it.text}
                                </Text>
                            </Tabs.Tab>
                        )}
                    </Tabs.List>

                    <Tabs.Panel value="integration">
                        <IntegrationLayout publicLink={publicLink}/>
                    </Tabs.Panel>
                    <Tabs.Panel value="responses">
                        <ResponsesLayout responses={responses}/>
                    </Tabs.Panel>
                    <Tabs.Panel value="settings">
                        settings
                    </Tabs.Panel>
                </Tabs>
            </Card>
        </Layout>
    );
};

export default Post;
