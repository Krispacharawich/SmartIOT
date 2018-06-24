import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {MenuItem} from '../MenuItem/MenuItem';

export class ListMenuItem extends Component {

    static navigationOptions = {
        title: 'ListMenu',
    }

    render() {
        const listItem = [
            {id:1, title:'ข้าวผัดปู', description:'ข้าวผัดปู', price:'70', source:'https://www.google.co.th/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjVvJbfjOLbAhVKtY8KHT4GA0AQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pim.in.th%2Fone-dish-food%2F875-fried-rice-with-crabmeat&psig=AOvVaw1M4LWIIOOy-sJtXlZ0EGkz&ust=1529579207106481'},
            {id:2, title:'ข้าวผัดหมู', description:'ข้าวผัดหมู', price:'50', source:'https://www.google.co.th/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi54L2OjeLbAhUXY48KHYpmDjwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DYFgwjDuIe1I&psig=AOvVaw1ncxHsP2Vpa4YL5tdb4xDv&ust=1529579300679354'},
            {id:3, title:'ข้าวผัดกุ้ง', description:'ข้าวผัดกุ้ง', price:'65', source:'https://www.google.co.th/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwik0aGBjeLbAhVBrY8KHVznCxAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQvy1WNo8G_I&psig=AOvVaw3iTBexPpwKUS3ZKcmaVSHy&ust=1529579283099798'}
        ];
        return (
            <ScrollView>

                    {
                        listItem.map( item => {
                            <MenuItem
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                source={item.source}
                                key ={item.id}
                            />
                        })

                    }

            </ScrollView>
        )
    }
}