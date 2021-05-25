
import { action, makeAutoObservable, makeObservable, observable } from 'mobx';
import React, { Component } from 'react'

export default class ActivityStore  {
    title = 'Hello from Mobx!';
   
    constructor() {
        makeAutoObservable(this)       
    }

    setTitle = () => {
        this.title = this.title + '!';
    }
}
