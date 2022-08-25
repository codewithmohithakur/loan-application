import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import CommonHeader from '../../common/Header';
import { getLoanDetails } from '../../service/Storage.service';
import Spinner from '../../common/Loader';
import { List } from 'react-native-paper';
import { COLORS } from '../../common/colors';

export default function Home(props) {
    const [loanData, setLoanData] = useState(); // variable use for storing load data
    const [loading, setLoading] = useState(true); // variable use for loader
    useEffect(() => {
        _fetchLoanDetails(); // calling loan details 
        const loaderState = setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    // get loan data
    const _fetchLoanDetails = async () => {
        const loanData = await getLoanDetails();
        if(loanData) {
            let result = [JSON.parse(loanData)];
            setLoanData(result);
        }
    }
    return (
        <>
            <Spinner visible={loading} />
            <View>
                <CommonHeader />
                <View style={styles.container}>
                    {/* TOP-BANK-SECTION START FROM HERE */}
                    <Text style={styles.topHeading}>Top Banks</Text>
                    <View style={styles.cardContainer}>
                        {/* SBI-BANK */}
                        <View style={styles.innerContainer}>
                            <Image
                                resizeMode="contain"
                                style={styles.imageDesign}
                                source={require('../../assests/images/sbi.png')}
                            />
                            <Text style={styles.bankNameText}>State Bank of India</Text>
                            <TouchableOpacity
                                style={styles.applyLoanButton} name="title">
                                <Text style={styles.applyLoanButtonText}>Apply Loan</Text>
                            </TouchableOpacity>
                        </View>
                        {/*  */}
                        <View style={styles.innerContainer}>
                            <Image
                                resizeMode="contain"
                                style={styles.imageDesign}
                                source={require('../../assests/images/pnb.png')}
                            />
                            <Text style={styles.bankNameText}>Punjab National Bank</Text>
                            <TouchableOpacity
                                style={styles.applyLoanButton} name="title">
                                <Text style={styles.applyLoanButtonText}>Apply Loan</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* TOP-BANK-SECTION END */}
                    <View style={styles.listContainer}>
                        {/* LIST-SECTION */}
                        <FlatList
                            data={loanData}
                            renderItem={({ item }) => (
                                // ACCORDION LIST SECTION
                                <List.Section>
                                    <List.Accordion style={styles.accordionContainer}
                                        title="loans"
                                        description="customer loans"
                                        left={props => <List.Icon {...props} icon='bank' />}>
                                        <View style={styles.listDesign}>
                                            <List.Item title="Bank Name" description={item.bank_name} />
                                            <List.Item title="Money" description={item.money} />
                                            <List.Item title="Year" description={item.long} />
                                        </View>
                                    </List.Accordion>
                                </List.Section>
                            )}
                        />
                        <Spinner visible={loading} />
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: COLORS.screenBackgroundColor,
    },
    logo: {
        alignSelf: 'center',
        width: 250,
        justifyContent: 'center'
    },
    imageDesign: {
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    mainText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 40
    },
    bankNameText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    cardContainer: {
        flexDirection: 'row'
    },
    innerContainer: {
        flex: 1,
        padding: 12,
        borderWidth: 4,
        borderColor: "#4DAB7B",
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
        backgroundColor: COLORS.whiteColor
    },
    topHeading: {
        color: COLORS.whiteColor,
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10,
        marginTop: 5
    },
    applyLoanButton: {
        width: '100%',
        padding: 10,
        backgroundColor: "#FC6B21",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    applyLoanButtonText: {
        color: COLORS.whiteColor,
        fontSize: 16,
        fontWeight: 'bold',
    },
    accordionContainer: {
        backgroundColor: COLORS.whiteColor,
    },
    listContainer: {
        marginTop: 10,
        padding: 10,
    },
    listDesign: {
        backgroundColor: COLORS.whiteColor
    }
});
